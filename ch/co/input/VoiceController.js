import { parseCommand } from './parseCommand';
export class VoiceController {
    constructor() {
        this.callback = null;
        this.active = false;
        const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Ctor) {
            this.recognition = null;
            return;
        }
        this.recognition = new Ctor();
        this.recognition.continuous = true;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
        this.recognition.maxAlternatives = 3;
    }
    start() {
        if (!this.recognition)
            return;
        this.active = true;
        this.recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (!result.isFinal)
                    continue;
                const transcripts = Array.from({ length: result.length }, (_, j) => result[j].transcript);
                console.log('[voice] heard:', transcripts);
                for (const transcript of transcripts) {
                    const cmd = parseCommand(transcript);
                    if (cmd && this.callback) {
                        this.callback(cmd);
                        return;
                    }
                }
            }
        };
        this.recognition.onstart = () => console.log('[voice] started');
        this.recognition.onend = () => {
            console.log('[voice] ended, active:', this.active);
            if (this.active)
                this.recognition.start();
        };
        this.recognition.onerror = (event) => {
            console.log('[voice] error:', event.error);
            if (event.error === 'not-allowed') {
                this.active = false;
            }
        };
        console.log('[voice] calling start()');
        this.recognition.start();
    }
    stop() {
        this.active = false;
        this.recognition?.stop();
    }
    onCommand(cb) { this.callback = cb; }
    isSupported() { return this.recognition !== null; }
}
//# sourceMappingURL=VoiceController.js.map