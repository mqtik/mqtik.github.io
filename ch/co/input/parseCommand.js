export function parseCommand(transcript) {
    const t = transcript.toLowerCase().trim();
    if ((t.includes('toggle') || t.includes('remove')) && t.includes('proximal'))
        return 'toggle_proximal';
    if ((t.includes('toggle') || t.includes('remove')) && t.includes('distal'))
        return 'toggle_distal';
    if ((t.includes('toggle') || t.includes('remove')) && t.includes('middle'))
        return 'toggle_middle';
    if (t.includes('cut'))
        return 'cut';
    if (t.includes('up'))
        return 'up';
    if (t.includes('down'))
        return 'down';
    return null;
}
//# sourceMappingURL=parseCommand.js.map