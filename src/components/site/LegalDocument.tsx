import type { ReactNode } from "react";
import { Container } from "./Primitives";

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold?.[1]) return <strong key={index}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link?.[1] && link[2]) {
      return (
        <a key={index} href={link[2]} className="text-primary underline underline-offset-4">
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

export function LegalDocument({ content }: { content: string }) {
  const lines = content.replace(/\r/g, "").split("\n");
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flushList = () => {
    if (!list.length) return;
    const items = list;
    list = [];
    blocks.push(
      <ul key={`list-${blocks.length}`} className="my-5 list-disc space-y-2 pl-6 text-foreground/80">
        {items.map((item) => <li key={item}>{inline(item)}</li>)}
      </ul>,
    );
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("* ")) {
      list.push(line.slice(2));
      return;
    }
    flushList();
    if (line.startsWith("# ")) return;
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${blocks.length}`} className="mt-12 border-t border-border pt-8 font-display text-2xl">{line.slice(3)}</h2>);
      return;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${blocks.length}`} className="mt-8 font-display text-lg">{line.slice(4)}</h3>);
      return;
    }
    blocks.push(<p key={`p-${blocks.length}`} className="my-4 leading-7 text-foreground/80">{inline(line)}</p>);
  });
  flushList();

  return <Container className="max-w-4xl py-14 md:py-20"><article>{blocks}</article></Container>;
}