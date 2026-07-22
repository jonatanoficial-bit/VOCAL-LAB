globalThis.FirebaseSync = (() => {
  let services = null;
  const ready = async () => {
    const setup = globalThis.VVL_FIREBASE;
    if (!setup?.enabled || !setup.config?.apiKey || !setup.config?.projectId) return { configured: false };
    if (!services) { const [appModule, authModule, firestoreModule] = await Promise.all([import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'), import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'), import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')]); const app = appModule.initializeApp(setup.config); const auth = authModule.getAuth(app); if (!auth.currentUser) await authModule.signInAnonymously(auth); services = { auth, authModule, db: firestoreModule.getFirestore(app), firestoreModule }; }
    return { configured: true, ...services };
  };
  const sync = async (profile, session) => { const service = await ready(); if (!service.configured) return { configured: false }; const uid = service.auth.currentUser.uid, { doc, setDoc, serverTimestamp } = service.firestoreModule; await setDoc(doc(service.db, 'users', uid), { profileName: profile.name, updatedAt: serverTimestamp() }, { merge: true }); if (session) await setDoc(doc(service.db, 'users', uid, 'sessions', session.id), { ...session, syncedAt: serverTimestamp() }); return { configured: true, uid }; };
  return { ready, sync };
})();
