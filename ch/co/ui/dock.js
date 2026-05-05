import { createApp, Events, Utils } from 'veloxi';
export function initDock() {
    const CommandShelfPlugin = (context) => {
        let items;
        let root;
        context.subscribeToEvents((eventBus) => {
            eventBus.subscribeToEvent(Events.PointerMoveEvent, onMouseMove);
        });
        function onMouseMove(event) {
            if (!root || !root.intersects(event.x, event.y)) {
                items.forEach(item => item.size.reset());
                return;
            }
            items.forEach(item => {
                const progress = Utils.pointToViewProgress({ x: event.x, y: event.y }, item, 120);
                const scale = Utils.remap(progress, 0, 1, 1, 1.9);
                item.size.set({ width: 40 * scale, height: 40 * scale });
            });
        }
        context.setup(() => {
            root = context.getView('root');
            items = context.getViews('item');
            items.forEach((item) => {
                item.size.setAnimator('dynamic');
                item.origin.set({ x: 0.5, y: 1 });
            });
        });
    };
    CommandShelfPlugin.pluginName = 'CommandShelf';
    const app = createApp();
    app.addPlugin(CommandShelfPlugin);
    app.run();
}
//# sourceMappingURL=dock.js.map