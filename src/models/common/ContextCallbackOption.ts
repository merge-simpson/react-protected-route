export default interface ContextCallbackOption {
  success?: (responseData?: any) => void;
  onCatch?: (err?: Error) => void;
}
