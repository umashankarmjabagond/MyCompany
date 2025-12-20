export default function GoldDivider() {
    return (
        <div className="max-w-7xl p-2 mx-auto">
            <div className="relative h-[2px]
                      bg-gradient-to-r from-transparent via-amber-400/70 to-transparent">
                <div className="absolute inset-0 blur-sm bg-amber-400/40" />
            </div>
        </div>
    );
}