/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateChatRoomMessage
// ====================================================

export interface CreateChatRoomMessage_createChatRoomMessage_chatRoomMessage {
  __typename: "ChatRoomMessage";
  id: string;
  content: string;
  createdAt: any;
}

export interface CreateChatRoomMessage_createChatRoomMessage_errors {
  __typename: "ModelError";
  /**
   * Which input value this error came from
   */
  key: string;
  /**
   * A description of the error
   */
  message: string;
}

export interface CreateChatRoomMessage_createChatRoomMessage {
  __typename: "CreateChatRoomMessagePayload";
  chatRoomMessage: CreateChatRoomMessage_createChatRoomMessage_chatRoomMessage | null;
  errors: CreateChatRoomMessage_createChatRoomMessage_errors[];
}

export interface CreateChatRoomMessage {
  createChatRoomMessage: CreateChatRoomMessage_createChatRoomMessage | null;
}

export interface CreateChatRoomMessageVariables {
  chatRoomId: string;
  content: string;
}
