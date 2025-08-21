function Overlay({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={onClick}
    />
  );
}

export default Overlay
