// Visible only while a project is `ready: false` (page is noindex). Lists facts the owner still has to add.
export function DraftNotice({ todo }: { todo: string[] }) {
  return (
    <div className="rounded-md border border-amber bg-surface-alt p-4 text-sm text-ink">
      <p className="font-semibold">Draft — awaiting owner approval. Not indexed by search engines.</p>
      {todo.length > 0 && (
        <ul className="mt-2 list-disc pl-5">
          {todo.map((item) => (
            <li key={item}>
              <span className="font-semibold text-amber-600">TODO:</span> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
