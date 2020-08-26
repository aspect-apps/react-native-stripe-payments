export interface InitParams {
    publishingKey: string;
}
export interface CardDetails {
    number: string;
    expMonth: number;
    expYear: number;
    cvc: string;
}
export interface PaymentResult {
    id: string;
    paymentMethodId: string;
}
export interface SetupIntentResult {
    paymentMethodId: string;
    liveMode: boolean;
    last4: string;
    created: number;
    brand: string;
}
declare class Stripe {
    _stripeInitialized: boolean;
    setOptions: (options: InitParams) => void;
    confirmPayment(clientSecret: string, cardDetails: CardDetails, createWithCardParams: boolean): Promise<PaymentResult>;
    confirmSetup(clientSecret: string, cardDetails: CardDetails): Promise<SetupIntentResult>;
    isCardValid(cardDetails: CardDetails): boolean;
}
declare const _default: Stripe;
export default _default;