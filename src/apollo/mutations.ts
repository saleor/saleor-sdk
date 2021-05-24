// import gql from "@apollo/client";

// import { accountErrorFragment, checkoutErrorFragment, paymentErrorFragment, checkoutFragment, orderDetailFragment, paymentFragment, userFragment } from "./fragments";

// export const tokenAuthMutation = gql`
//   ${accountErrorFragment}
//   mutation TokenAuth($email: String!, $password: String!) {
//     tokenCreate(email: $email, password: $password) {
//       csrfToken
//       refreshToken
//       token
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         id
//       }
//     }
//   }
// `;

// export const tokenVeryficationMutation = gql`
//   ${accountErrorFragment}
//   mutation VerifyToken($token: String!) {
//     tokenVerify(token: $token) {
//       isValid
//       payload
//       user {
//         id
//       }
//       errors: accountErrors {
//         ...AccountError
//       }
//     }
//   }
// `;

// export const tokenRefreshMutation = gql`
//   ${accountErrorFragment}
//   mutation RefreshToken($csrfToken: String, $refreshToken: String) {
//     tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
//       token
//       user {
//         id
//       }
//       errors: accountErrors {
//         ...AccountError
//       }
//     }
//   }
// `;

// export const changeUserPassword = gql`
//   ${accountErrorFragment}
//   mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
//     passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
//       errors: accountErrors {
//         ...AccountError
//       }
//     }
//   }
// `;

// export const registerAccount = gql`
//   mutation RegisterAccount(
//     $email: String!
//     $password: String!
//     $redirectUrl: String!
//   ) {
//     accountRegister(
//       input: { email: $email, password: $password, redirectUrl: $redirectUrl }
//     ) {
//       accountErrors {
//         field
//         message
//         code
//       }
//       requiresConfirmation
//     }
//   }
// `;

// export const resetPasswordRequest = gql`
//   mutation ResetPasswordRequest($email: String!, $redirectUrl: String!) {
//     requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
//       accountErrors {
//         field
//         message
//         code
//       }
//     }
//   }
// `;

// export const accountUpdate = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation AccountUpdate($input: AccountInput!) {
//     accountUpdate(input: $input) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         ...User
//       }
//     }
//   }
// `;

// export const setPassword = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation SetPassword($token: String!, $email: String!, $password: String!) {
//     setPassword(token: $token, email: $email, password: $password) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       token
//       user {
//         ...User
//       }
//       accountErrors {
//         field
//         message
//         code
//       }
//     }
//   }
// `;

// export const updateCheckoutLineMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation UpdateCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
//     checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//     }
//   }
// `;

// export const createCheckoutMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation CreateCheckout($checkoutInput: CheckoutCreateInput!) {
//     checkoutCreate(input: $checkoutInput) {
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//       checkout {
//         ...Checkout
//       }
//     }
//   }
// `;

// export const updateCheckoutBillingAddressWithEmailMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation UpdateCheckoutBillingAddressWithEmail(
//     $checkoutId: ID!
//     $billingAddress: AddressInput!
//     $email: String!
//   ) {
//     checkoutBillingAddressUpdate(
//       checkoutId: $checkoutId
//       billingAddress: $billingAddress
//     ) {
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//       checkout {
//         ...Checkout
//       }
//     }
//     checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         code
//         field
//         message
//       }
//     }
//   }
// `;

// export const updateCheckoutBillingAddressMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation UpdateCheckoutBillingAddress(
//     $checkoutId: ID!
//     $billingAddress: AddressInput!
//   ) {
//     checkoutBillingAddressUpdate(
//       checkoutId: $checkoutId
//       billingAddress: $billingAddress
//     ) {
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//       checkout {
//         ...Checkout
//       }
//     }
//   }
// `;

// export const updateCheckoutShippingAddressMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation UpdateCheckoutShippingAddress(
//     $checkoutId: ID!
//     $shippingAddress: AddressInput!
//     $email: String!
//   ) {
//     checkoutShippingAddressUpdate(
//       checkoutId: $checkoutId
//       shippingAddress: $shippingAddress
//     ) {
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//       checkout {
//         ...Checkout
//       }
//     }
//     checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//     }
//   }
// `;

// export const updateCheckoutShippingMethodMutation = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation UpdateCheckoutShippingMethod(
//     $checkoutId: ID!
//     $shippingMethodId: ID!
//   ) {
//     checkoutShippingMethodUpdate(
//       checkoutId: $checkoutId
//       shippingMethodId: $shippingMethodId
//     ) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//     }
//   }
// `;

// export const addCheckoutPromoCode = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation AddCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
//     checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//     }
//   }
// `;

// export const removeCheckoutPromoCode = gql`
//   ${checkoutFragment}
//   ${checkoutErrorFragment}
//   mutation RemoveCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
//     checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
//       checkout {
//         ...Checkout
//       }
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//     }
//   }
// `;

// export const createCheckoutPaymentMutation = gql`
//   ${checkoutFragment}
//   ${paymentFragment}
//   ${paymentErrorFragment}
//   mutation CreateCheckoutPayment(
//     $checkoutId: ID!
//     $paymentInput: PaymentInput!
//   ) {
//     checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentInput) {
//       checkout {
//         ...Checkout
//       }
//       payment {
//         ...Payment
//       }
//       errors: paymentErrors {
//         ...PaymentError
//       }
//     }
//   }
// `;

// export const completeCheckoutMutation = gql`
//   ${orderDetailFragment}
//   ${checkoutErrorFragment}
//   mutation CompleteCheckout(
//     $checkoutId: ID!
//     $paymentData: JSONString
//     $redirectUrl: String
//     $storeSource: Boolean
//   ) {
//     checkoutComplete(
//       checkoutId: $checkoutId
//       paymentData: $paymentData
//       redirectUrl: $redirectUrl
//       storeSource: $storeSource
//     ) {
//       errors: checkoutErrors {
//         ...CheckoutError
//       }
//       order {
//         ...OrderDetail
//       }
//       confirmationNeeded
//       confirmationData
//     }
//   }
// `;

// export const setCustomerDefaultAddress = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation SetCustomerDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
//     accountSetDefaultAddress(id: $id, type: $type) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         ...User
//       }
//     }
//   }
// `;

// export const deleteUserAddress = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation DeleteUserAddress($addressId: ID!) {
//     accountAddressDelete(id: $addressId) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         ...User
//       }
//     }
//   }
// `;

// export const createUserAddress = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation CreateUserAddress($input: AddressInput!) {
//     accountAddressCreate(input: $input) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         ...User
//       }
//     }
//   }
// `;

// export const updateUserAddress = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation UpdateUserAddress($input: AddressInput!, $id: ID!) {
//     accountAddressUpdate(input: $input, id: $id) {
//       errors: accountErrors {
//         ...AccountError
//       }
//       user {
//         ...User
//       }
//     }
//   }
// `;
