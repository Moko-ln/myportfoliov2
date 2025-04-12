export const Ping = () => {
    return (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex flex-col gap-4 items-center`}>
            <span className="relative flex h-3 w-3">
              <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
        </div>
    );
};