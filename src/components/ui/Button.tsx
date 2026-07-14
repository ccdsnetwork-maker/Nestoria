type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-[#0B2E6B] px-6 py-3 font-semibold text-white transition hover:opacity-90"
    >
      {children}
    </button>
  );
}