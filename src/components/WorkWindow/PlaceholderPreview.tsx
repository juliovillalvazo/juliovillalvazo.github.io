export function PlaceholderPreview() {
    return (
        <>
            <span className='work-window__preview-bar'>
                <span />
                <span />
                <span />
            </span>
            <span className='work-window__preview-content'>
                <span className='work-window__preview-row work-window__preview-row--wide' />
                <span className='work-window__preview-row' />
                <span className='work-window__preview-grid'>
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
                <span className='work-window__preview-cta' />
            </span>
        </>
    );
}
