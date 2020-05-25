/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChatRoomMessagesTest
// ====================================================

export interface GetChatRoomMessagesTest_chatRoomMessages {
  __typename: "ChatRoomMessage";
  content: string;
  createdAt: any;
}

export interface GetChatRoomMessagesTest {
  /**
   * メッセージを全て取得します
   */
  chatRoomMessages: GetChatRoomMessagesTest_chatRoomMessages[];
}
