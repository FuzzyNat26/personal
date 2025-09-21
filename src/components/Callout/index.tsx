type CalloutItem = {
    children: React.ReactNode;
    Icon: string;
    Color: string;
};

export default function Callout({
    children,
    Icon,
    Color,
}: CalloutItem): JSX.Element {
    return (
        <div
            className={`flex gap-2 border-solid border-0 border-l-2 bg-opacity-[15%] py-2 px-3 mb-5 ${Color} callout`}
        >
            {Icon && <span className="text-xl">{Icon}</span>}
            <p className="m-0">{children}</p>
        </div>
    );
}
