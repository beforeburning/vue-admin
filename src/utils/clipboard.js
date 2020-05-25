/**
 Function: 剪切板
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */
import Vue from 'vue';
import Clipboard from 'clipboard';

const clipboardSuccess = () => Vue.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
});

const clipboardError = () => Vue.prototype.$message({
    message: 'Copy failed',
    type: 'error'
});

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    });
    clipboard.on('success', () => {
        clipboardSuccess();
        clipboard.destroy();
    });
    clipboard.on('error', () => {
        clipboardError();
        clipboard.destroy();
    });
    clipboard.onClick(event);
}
