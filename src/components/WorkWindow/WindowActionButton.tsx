type WindowActionButtonProps = {
    tone: 'red' | 'yellow' | 'green';
    label: string;
    tooltip: string;
    onClick: () => void;
};

export function WindowActionButton({
    tone,
    label,
    tooltip,
    onClick,
}: WindowActionButtonProps) {
    return (
        <button
            className={`work-window__dot work-window__dot--${tone}`}
            type='button'
            onClick={(event) => {
                event.stopPropagation();
                onClick();
            }}
            aria-label={label}
        >
            <span className='work-window__dot-tooltip'>{tooltip}</span>
        </button>
    );
}
