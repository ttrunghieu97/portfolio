export default function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <footer className="flex items-center justify-center py-4">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Te Trung Hieu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

