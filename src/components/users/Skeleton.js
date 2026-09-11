import classNames from "classnames";

function Skeleton({ times }) {
    const outerClassNames = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-300",
        "rounded",
        "mb-2.5",
        'h-8',
        classNames
    );
    const innerClassNames = classNames(
        'w-full',
        'absolute',
        'inset-0',
        'animate-pulse',
        'rounded',
        'bg-gray-200/100',
    );

    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return (
                <div key={i} className={'skeloton'}>
                    <div className={'skeleton'} />
                </div>
            );
        });

    return boxes;
}

export default Skeleton;
