export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
export const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
export const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
export const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM
export const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export const creditCardRegex = /^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/;
export const noSpecialCharacterRegex = /^[a-zA-Z0-9]+$/;
