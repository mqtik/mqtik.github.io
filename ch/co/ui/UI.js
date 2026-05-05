const STATE_TEXT = {
    loading: 'Loading...',
    listening: 'Listening...',
    plane_active: 'Active',
    first_cut_done: 'First Cut',
    cut_executed: 'Cut Executed',
};
export class UI {
    constructor() {
        this.clearTimer = null;
        this.modeToggleHandler = null;
        this.statusBar = document.getElementById('status-bar');
        this.recordBtn = document.getElementById('record-btn');
        this.stateEl = this.statusBar.querySelector('.state');
        this.lastCommandEl = this.statusBar.querySelector('.last-command');
        this.modeToggle = document.getElementById('mode-toggle');
        this.toggleMiddleBtn = document.querySelector('[data-cmd="toggle_middle"]');
        this.toggleMiddleBtn.hidden = true;
    }
    setState(state) {
        this.stateEl.textContent = STATE_TEXT[state];
    }
    setLoading(loading) {
        this.recordBtn.classList.toggle('loading', loading);
    }
    setLastCommand(text) {
        this.lastCommandEl.textContent = text;
        this.statusBar.classList.add('command-visible');
        if (this.clearTimer)
            clearTimeout(this.clearTimer);
        this.clearTimer = setTimeout(() => {
            this.statusBar.classList.remove('command-visible');
        }, 3000);
    }
    syncButtons(enabled, modeToggleEnabled) {
        const cmds = ['up', 'down', 'cut', 'toggle_proximal', 'toggle_middle', 'toggle_distal'];
        for (const cmd of cmds) {
            const btn = document.querySelector(`[data-cmd="${cmd}"]`);
            if (!btn)
                continue;
            btn.disabled = !enabled.has(cmd);
        }
        this.modeToggle.disabled = !modeToggleEnabled;
    }
    onModeToggle(handler) {
        if (this.modeToggleHandler) {
            this.modeToggle.removeEventListener('click', this.modeToggleHandler);
        }
        this.modeToggleHandler = handler;
        this.modeToggle.addEventListener('click', handler);
    }
    setTwoCutMode(active) {
        this.modeToggle.dataset.tooltip = active ? 'Two Cuts' : 'Single Cut';
        this.modeToggle.classList.toggle('active', active);
        this.toggleMiddleBtn.hidden = !active;
    }
}
//# sourceMappingURL=UI.js.map