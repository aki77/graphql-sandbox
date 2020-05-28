/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubscribeChatRoomMessageWasCreated
// ====================================================

export interface SubscribeChatRoomMessageWasCreated_chatRoomMessageWasCreated_chatRoomMessage {
  __typename: "ChatRoomMessage";
  id: string;
  content: string;
  createdAt: any;
}

export interface SubscribeChatRoomMessageWasCreated_chatRoomMessageWasCreated {
  __typename: "ChatRoomMessageWasCreatedPayload";
  chatRoomMessage: SubscribeChatRoomMessageWasCreated_chatRoomMessageWasCreated_chatRoomMessage;
}

export interface SubscribeChatRoomMessageWasCreated {
  chatRoomMessageWasCreated: SubscribeChatRoomMessageWasCreated_chatRoomMessageWasCreated;
}

export interface SubscribeChatRoomMessageWasCreatedVariables {
  chatRoomId: string;
}
