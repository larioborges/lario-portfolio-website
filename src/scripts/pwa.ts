// TODO Lario PWA

// import { registerSW } from 'virtual:pwa-register';

// window.addEventListener('load', () => {
// 	const pwaToast = document.querySelector<HTMLDivElement>('#pwa-toast');
// 	const pwaToastMessage = pwaToast?.querySelector<HTMLDivElement>(
// 		'.message #toast-message',
// 	);
// 	const pwaCloseBtn = pwaToast?.querySelector<HTMLButtonElement>('#pwa-close');
// 	const pwaRefreshBtn =
// 		pwaToast?.querySelector<HTMLButtonElement>('#pwa-refresh');

// 	const refreshCallback = () => refreshSW?.(true);

// 	const hidePwaToast = (raf = false) => {
// 		if (raf) {
// 			requestAnimationFrame(() => hidePwaToast(false));
// 			return;
// 		}
// 		if (pwaToast?.classList.contains('refresh'))
// 			pwaRefreshBtn?.removeEventListener('click', refreshCallback);

// 		pwaToast?.classList.remove('show', 'refresh');
// 	};
// 	const showPwaToast = (offline: boolean) => {
// 		if (!offline) pwaRefreshBtn?.addEventListener('click', refreshCallback);
// 		requestAnimationFrame(() => {
// 			hidePwaToast(false);
// 			if (!offline) pwaToast?.classList.add('refresh');
// 			pwaToast?.classList.add('show');
// 		});
// 	};

// 	pwaCloseBtn?.addEventListener('click', () => hidePwaToast(true));

// 	const refreshSW: ((reloadPage?: boolean) => Promise<void>) | undefined =
// 		registerSW({
// 			immediate: true,
// 			onOfflineReady() {
// 				if (pwaToastMessage) {
// 					pwaToastMessage.innerHTML = 'App ready to work offline';
// 				}
// 				showPwaToast(true);
// 			},
// 			onNeedRefresh() {
// 				if (pwaToastMessage) {
// 					pwaToastMessage.innerHTML =
// 						'New content available, click on reload button to update';
// 				}
// 				showPwaToast(false);
// 			},
// 		});
// });
