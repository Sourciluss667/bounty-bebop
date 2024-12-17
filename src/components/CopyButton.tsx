import React from 'react';
import { Button, Tooltip } from '@radix-ui/themes';
import { ClipboardCopyIcon } from '@radix-ui/react-icons';

export function CopyButton({ text }: { text: string }) {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (
        <Button variant="ghost" size="1" className="copy-button" onClick={handleClick} onMouseLeave={() => setShowTooltip(false)}>
            <Tooltip content="Copied !" open={showTooltip}>
                <ClipboardCopyIcon color="var(--accent-9)" />
            </Tooltip>
        </Button>
    );
}