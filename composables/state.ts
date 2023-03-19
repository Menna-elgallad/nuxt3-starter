export const usetoken = () => useState<any>('tokenlocal', () => window.localStorage.getItem("token") || null)
