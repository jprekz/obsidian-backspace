import { MarkdownView, Plugin } from 'obsidian';

export default class BackspacePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'backspace',
			name: 'backspace',
			callback: () => {
				let view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					let editor = view.editor;
					let pos = editor.getCursor();
					let posoffset = editor.posToOffset(pos);
					let from = editor.offsetToPos(posoffset - 1);
					editor.replaceRange("", from, pos);
				}
			}
		});
	}
}
