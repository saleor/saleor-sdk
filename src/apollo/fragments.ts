import { gql } from "@apollo/client";

export const accountErrorFragment = gql`
  fragment AccountErrorFragment on AccountError {
    code
    field
    message
  }
`;

export const addressFragment = gql`
  fragment AddressFragment on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const channelFragment = gql`
  fragment ChannelFragment on Channel {
    id
    isActive
    name
    slug
    currencyCode
    defaultCountry {
      code
      country
    }
    stockSettings {
      allocationStrategy
    }
  }
`;

export const userBaseFragment = gql`
  fragment UserBaseFragment on User {
    id
    email
    firstName
    lastName
    isStaff
  }
`;

export const userDetailsFragment = gql`
  ${addressFragment}
  ${userBaseFragment}
  ${channelFragment}
  fragment UserDetailsFragment on User {
    ...UserBaseFragment
    metadata {
      key
      value
    }
    defaultShippingAddress {
      ...AddressFragment
    }
    defaultBillingAddress {
      ...AddressFragment
    }
    addresses {
      ...AddressFragment
    }
    accessibleChannels {
      ...ChannelFragment
    }
    restrictedAccessToChannels
  }
`;
