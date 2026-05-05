import { VoiceController } from './VoiceController';
const KEY_MAP = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    c: 'cut', C: 'cut',
    p: 'toggle_proximal', P: 'toggle_proximal',
    m: 'toggle_middle', M: 'toggle_middle',
    d: 'toggle_distal', D: 'toggle_distal',
};
export function bindInput(onCommand) {
    window.addEventListener('keydown', (e) => {
        const cmd = KEY_MAP[e.key];
        if (cmd) {
            e.preventDefault();
            onCommand(cmd);
        }
    });
    document.querySelectorAll('#controls-bar button[data-cmd]').forEach((btn) => {
        btn.addEventListener('click', () => { btn.blur(); onCommand(btn.dataset.cmd); });
    });
    const voice = new VoiceController();
    voice.onCommand(onCommand);
    if (voice.isSupported())
        voice.start();
    return () => voice.stop();
}
//# sourceMappingURL=InputController.js.map