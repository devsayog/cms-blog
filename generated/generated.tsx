import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageCategory: Array<Category>
  imagePost: Array<Post>
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  profilePictureAuthor: Array<Author>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetImageCategoryArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryWhereInput>
}

/** Asset system model */
export type AssetImagePostArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetProfilePictureAuthorArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorWhereInput>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  imageCategory?: InputMaybe<CategoryCreateManyInlineInput>
  imagePost?: InputMaybe<PostCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  profilePictureAuthor?: InputMaybe<AuthorCreateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCategory_every?: InputMaybe<CategoryWhereInput>
  imageCategory_none?: InputMaybe<CategoryWhereInput>
  imageCategory_some?: InputMaybe<CategoryWhereInput>
  imagePost_every?: InputMaybe<PostWhereInput>
  imagePost_none?: InputMaybe<PostWhereInput>
  imagePost_some?: InputMaybe<PostWhereInput>
  profilePictureAuthor_every?: InputMaybe<AuthorWhereInput>
  profilePictureAuthor_none?: InputMaybe<AuthorWhereInput>
  profilePictureAuthor_some?: InputMaybe<AuthorWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  imageCategory?: InputMaybe<CategoryUpdateManyInlineInput>
  imagePost?: InputMaybe<PostUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  profilePictureAuthor?: InputMaybe<AuthorUpdateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  fileName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCategory_every?: InputMaybe<CategoryWhereInput>
  imageCategory_none?: InputMaybe<CategoryWhereInput>
  imageCategory_some?: InputMaybe<CategoryWhereInput>
  imagePost_every?: InputMaybe<PostWhereInput>
  imagePost_none?: InputMaybe<PostWhereInput>
  imagePost_some?: InputMaybe<PostWhereInput>
  mimeType?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>
  profilePictureAuthor_every?: InputMaybe<AuthorWhereInput>
  profilePictureAuthor_none?: InputMaybe<AuthorWhereInput>
  profilePictureAuthor_some?: InputMaybe<AuthorWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Author = Node & {
  __typename?: 'Author'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Author>
  /** List of Author versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name: Scalars['String']
  posts: Array<Post>
  profilePicture: Asset
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type AuthorCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type AuthorHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type AuthorPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type AuthorProfilePictureArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type AuthorUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AuthorWhereUniqueInput
}

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AuthorEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AuthorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  name: Scalars['String']
  posts?: InputMaybe<PostCreateManyInlineInput>
  profilePicture: AssetCreateOneInlineInput
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>
}

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>
}

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Author
}

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  profilePicture?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AuthorOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AuthorUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  posts?: InputMaybe<PostUpdateManyInlineInput>
  profilePicture?: InputMaybe<AssetUpdateOneInlineInput>
}

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>
}

export type AuthorUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput
  /** Document search */
  where: AuthorWhereInput
}

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>
}

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput
  /** Update document if it exists */
  update: AuthorUpdateInput
}

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  profilePicture?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type Category = Node & {
  __typename?: 'Category'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Category>
  /** List of Category versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image: Asset
  name: Scalars['String']
  posts: Array<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CategoryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type CategoryHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type CategoryImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type CategoryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CategoryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CategoryWhereUniqueInput
}

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CategoryEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  image: AssetCreateOneInlineInput
  name: Scalars['String']
  posts?: InputMaybe<PostCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
}

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
}

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Category
}

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']>
  posts?: InputMaybe<PostUpdateManyInlineInput>
}

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>
}

export type CategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput
  /** Document search */
  where: CategoryWhereInput
}

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>
}

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput
  /** Update document if it exists */
  update: CategoryUpdateInput
}

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type EditorPick = Node & {
  __typename?: 'EditorPick'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<EditorPick>
  /** List of EditorPick versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  posts: Array<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type EditorPickCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type EditorPickDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type EditorPickHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type EditorPickPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type EditorPickPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type EditorPickScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type EditorPickUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type EditorPickConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: EditorPickWhereUniqueInput
}

/** A connection to a list of items. */
export type EditorPickConnection = {
  __typename?: 'EditorPickConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<EditorPickEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type EditorPickCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  posts?: InputMaybe<PostCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EditorPickCreateManyInlineInput = {
  /** Connect multiple existing EditorPick documents */
  connect?: InputMaybe<Array<EditorPickWhereUniqueInput>>
  /** Create and connect multiple existing EditorPick documents */
  create?: InputMaybe<Array<EditorPickCreateInput>>
}

export type EditorPickCreateOneInlineInput = {
  /** Connect one existing EditorPick document */
  connect?: InputMaybe<EditorPickWhereUniqueInput>
  /** Create and connect one EditorPick document */
  create?: InputMaybe<EditorPickCreateInput>
}

/** An edge in a connection. */
export type EditorPickEdge = {
  __typename?: 'EditorPickEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: EditorPick
}

/** Identifies documents */
export type EditorPickManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorPickWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorPickWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorPickWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum EditorPickOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type EditorPickUpdateInput = {
  posts?: InputMaybe<PostUpdateManyInlineInput>
}

export type EditorPickUpdateManyInlineInput = {
  /** Connect multiple existing EditorPick documents */
  connect?: InputMaybe<Array<EditorPickConnectInput>>
  /** Create and connect multiple EditorPick documents */
  create?: InputMaybe<Array<EditorPickCreateInput>>
  /** Delete multiple EditorPick documents */
  delete?: InputMaybe<Array<EditorPickWhereUniqueInput>>
  /** Disconnect multiple EditorPick documents */
  disconnect?: InputMaybe<Array<EditorPickWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing EditorPick documents */
  set?: InputMaybe<Array<EditorPickWhereUniqueInput>>
  /** Update multiple EditorPick documents */
  update?: InputMaybe<Array<EditorPickUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple EditorPick documents */
  upsert?: InputMaybe<Array<EditorPickUpsertWithNestedWhereUniqueInput>>
}

export type EditorPickUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type EditorPickUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EditorPickUpdateManyInput
  /** Document search */
  where: EditorPickWhereInput
}

export type EditorPickUpdateOneInlineInput = {
  /** Connect existing EditorPick document */
  connect?: InputMaybe<EditorPickWhereUniqueInput>
  /** Create and connect one EditorPick document */
  create?: InputMaybe<EditorPickCreateInput>
  /** Delete currently connected EditorPick document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected EditorPick document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single EditorPick document */
  update?: InputMaybe<EditorPickUpdateWithNestedWhereUniqueInput>
  /** Upsert single EditorPick document */
  upsert?: InputMaybe<EditorPickUpsertWithNestedWhereUniqueInput>
}

export type EditorPickUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EditorPickUpdateInput
  /** Unique document search */
  where: EditorPickWhereUniqueInput
}

export type EditorPickUpsertInput = {
  /** Create document if it didn't exist */
  create: EditorPickCreateInput
  /** Update document if it exists */
  update: EditorPickUpdateInput
}

export type EditorPickUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EditorPickUpsertInput
  /** Unique document search */
  where: EditorPickWhereUniqueInput
}

/** Identifies documents */
export type EditorPickWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorPickWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorPickWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorPickWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References EditorPick record uniquely */
export type EditorPickWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type FeaturedPost = Node & {
  __typename?: 'FeaturedPost'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<FeaturedPost>
  /** List of FeaturedPost versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  posts: Array<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type FeaturedPostCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type FeaturedPostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type FeaturedPostHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type FeaturedPostPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type FeaturedPostPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type FeaturedPostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type FeaturedPostUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type FeaturedPostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: FeaturedPostWhereUniqueInput
}

/** A connection to a list of items. */
export type FeaturedPostConnection = {
  __typename?: 'FeaturedPostConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<FeaturedPostEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type FeaturedPostCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  posts?: InputMaybe<PostCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type FeaturedPostCreateManyInlineInput = {
  /** Connect multiple existing FeaturedPost documents */
  connect?: InputMaybe<Array<FeaturedPostWhereUniqueInput>>
  /** Create and connect multiple existing FeaturedPost documents */
  create?: InputMaybe<Array<FeaturedPostCreateInput>>
}

export type FeaturedPostCreateOneInlineInput = {
  /** Connect one existing FeaturedPost document */
  connect?: InputMaybe<FeaturedPostWhereUniqueInput>
  /** Create and connect one FeaturedPost document */
  create?: InputMaybe<FeaturedPostCreateInput>
}

/** An edge in a connection. */
export type FeaturedPostEdge = {
  __typename?: 'FeaturedPostEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: FeaturedPost
}

/** Identifies documents */
export type FeaturedPostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum FeaturedPostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type FeaturedPostUpdateInput = {
  posts?: InputMaybe<PostUpdateManyInlineInput>
}

export type FeaturedPostUpdateManyInlineInput = {
  /** Connect multiple existing FeaturedPost documents */
  connect?: InputMaybe<Array<FeaturedPostConnectInput>>
  /** Create and connect multiple FeaturedPost documents */
  create?: InputMaybe<Array<FeaturedPostCreateInput>>
  /** Delete multiple FeaturedPost documents */
  delete?: InputMaybe<Array<FeaturedPostWhereUniqueInput>>
  /** Disconnect multiple FeaturedPost documents */
  disconnect?: InputMaybe<Array<FeaturedPostWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing FeaturedPost documents */
  set?: InputMaybe<Array<FeaturedPostWhereUniqueInput>>
  /** Update multiple FeaturedPost documents */
  update?: InputMaybe<Array<FeaturedPostUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FeaturedPost documents */
  upsert?: InputMaybe<Array<FeaturedPostUpsertWithNestedWhereUniqueInput>>
}

export type FeaturedPostUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type FeaturedPostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeaturedPostUpdateManyInput
  /** Document search */
  where: FeaturedPostWhereInput
}

export type FeaturedPostUpdateOneInlineInput = {
  /** Connect existing FeaturedPost document */
  connect?: InputMaybe<FeaturedPostWhereUniqueInput>
  /** Create and connect one FeaturedPost document */
  create?: InputMaybe<FeaturedPostCreateInput>
  /** Delete currently connected FeaturedPost document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected FeaturedPost document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single FeaturedPost document */
  update?: InputMaybe<FeaturedPostUpdateWithNestedWhereUniqueInput>
  /** Upsert single FeaturedPost document */
  upsert?: InputMaybe<FeaturedPostUpsertWithNestedWhereUniqueInput>
}

export type FeaturedPostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeaturedPostUpdateInput
  /** Unique document search */
  where: FeaturedPostWhereUniqueInput
}

export type FeaturedPostUpsertInput = {
  /** Create document if it didn't exist */
  create: FeaturedPostCreateInput
  /** Update document if it exists */
  update: FeaturedPostUpdateInput
}

export type FeaturedPostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeaturedPostUpsertInput
  /** Unique document search */
  where: FeaturedPostWhereUniqueInput
}

/** Identifies documents */
export type FeaturedPostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedPostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References FeaturedPost record uniquely */
export type FeaturedPostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one author */
  createAuthor?: Maybe<Author>
  /** Create one category */
  createCategory?: Maybe<Category>
  /** Create one editorPick */
  createEditorPick?: Maybe<EditorPick>
  /** Create one featuredPost */
  createFeaturedPost?: Maybe<FeaturedPost>
  /** Create one post */
  createPost?: Maybe<Post>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>
  /** Delete one editorPick from _all_ existing stages. Returns deleted document. */
  deleteEditorPick?: Maybe<EditorPick>
  /** Delete one featuredPost from _all_ existing stages. Returns deleted document. */
  deleteFeaturedPost?: Maybe<FeaturedPost>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection
  /**
   * Delete many EditorPick documents
   * @deprecated Please use the new paginated many mutation (deleteManyEditorPicksConnection)
   */
  deleteManyEditorPicks: BatchPayload
  /** Delete many EditorPick documents, return deleted documents */
  deleteManyEditorPicksConnection: EditorPickConnection
  /**
   * Delete many FeaturedPost documents
   * @deprecated Please use the new paginated many mutation (deleteManyFeaturedPostsConnection)
   */
  deleteManyFeaturedPosts: BatchPayload
  /** Delete many FeaturedPost documents, return deleted documents */
  deleteManyFeaturedPostsConnection: FeaturedPostConnection
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one author */
  publishAuthor?: Maybe<Author>
  /** Publish one category */
  publishCategory?: Maybe<Category>
  /** Publish one editorPick */
  publishEditorPick?: Maybe<EditorPick>
  /** Publish one featuredPost */
  publishFeaturedPost?: Maybe<FeaturedPost>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection
  /**
   * Publish many EditorPick documents
   * @deprecated Please use the new paginated many mutation (publishManyEditorPicksConnection)
   */
  publishManyEditorPicks: BatchPayload
  /** Publish many EditorPick documents */
  publishManyEditorPicksConnection: EditorPickConnection
  /**
   * Publish many FeaturedPost documents
   * @deprecated Please use the new paginated many mutation (publishManyFeaturedPostsConnection)
   */
  publishManyFeaturedPosts: BatchPayload
  /** Publish many FeaturedPost documents */
  publishManyFeaturedPostsConnection: FeaturedPostConnection
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection
  /** Publish one post */
  publishPost?: Maybe<Post>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>
  /** Schedule to publish one editorPick */
  schedulePublishEditorPick?: Maybe<EditorPick>
  /** Schedule to publish one featuredPost */
  schedulePublishFeaturedPost?: Maybe<FeaturedPost>
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>
  /** Unpublish one editorPick from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEditorPick?: Maybe<EditorPick>
  /** Unpublish one featuredPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFeaturedPost?: Maybe<FeaturedPost>
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>
  /** Unpublish one editorPick from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEditorPick?: Maybe<EditorPick>
  /** Unpublish one featuredPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFeaturedPost?: Maybe<FeaturedPost>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection
  /**
   * Unpublish many EditorPick documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEditorPicksConnection)
   */
  unpublishManyEditorPicks: BatchPayload
  /** Find many EditorPick documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEditorPicksConnection: EditorPickConnection
  /**
   * Unpublish many FeaturedPost documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFeaturedPostsConnection)
   */
  unpublishManyFeaturedPosts: BatchPayload
  /** Find many FeaturedPost documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFeaturedPostsConnection: FeaturedPostConnection
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one author */
  updateAuthor?: Maybe<Author>
  /** Update one category */
  updateCategory?: Maybe<Category>
  /** Update one editorPick */
  updateEditorPick?: Maybe<EditorPick>
  /** Update one featuredPost */
  updateFeaturedPost?: Maybe<FeaturedPost>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection
  /**
   * Update many editorPicks
   * @deprecated Please use the new paginated many mutation (updateManyEditorPicksConnection)
   */
  updateManyEditorPicks: BatchPayload
  /** Update many EditorPick documents */
  updateManyEditorPicksConnection: EditorPickConnection
  /**
   * Update many featuredPosts
   * @deprecated Please use the new paginated many mutation (updateManyFeaturedPostsConnection)
   */
  updateManyFeaturedPosts: BatchPayload
  /** Update many FeaturedPost documents */
  updateManyFeaturedPostsConnection: FeaturedPostConnection
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection
  /** Update one post */
  updatePost?: Maybe<Post>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>
  /** Upsert one category */
  upsertCategory?: Maybe<Category>
  /** Upsert one editorPick */
  upsertEditorPick?: Maybe<EditorPick>
  /** Upsert one featuredPost */
  upsertFeaturedPost?: Maybe<FeaturedPost>
  /** Upsert one post */
  upsertPost?: Maybe<Post>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
}

export type MutationCreateEditorPickArgs = {
  data: EditorPickCreateInput
}

export type MutationCreateFeaturedPostArgs = {
  data: FeaturedPostCreateInput
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput
}

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
}

export type MutationDeleteEditorPickArgs = {
  where: EditorPickWhereUniqueInput
}

export type MutationDeleteFeaturedPostArgs = {
  where: FeaturedPostWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyEditorPicksArgs = {
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationDeleteManyEditorPicksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationDeleteManyFeaturedPostsArgs = {
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationDeleteManyFeaturedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishAuthorArgs = {
  to?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationPublishCategoryArgs = {
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationPublishEditorPickArgs = {
  to?: Array<Stage>
  where: EditorPickWhereUniqueInput
}

export type MutationPublishFeaturedPostArgs = {
  to?: Array<Stage>
  where: FeaturedPostWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyEditorPicksArgs = {
  to?: Array<Stage>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationPublishManyEditorPicksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationPublishManyFeaturedPostsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationPublishManyFeaturedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishPostArgs = {
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationSchedulePublishEditorPickArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: EditorPickWhereUniqueInput
}

export type MutationSchedulePublishFeaturedPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: FeaturedPostWhereUniqueInput
}

export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: AuthorWhereUniqueInput
}

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: CategoryWhereUniqueInput
}

export type MutationScheduleUnpublishEditorPickArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: EditorPickWhereUniqueInput
}

export type MutationScheduleUnpublishFeaturedPostArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: FeaturedPostWhereUniqueInput
}

export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PostWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationUnpublishEditorPickArgs = {
  from?: Array<Stage>
  where: EditorPickWhereUniqueInput
}

export type MutationUnpublishFeaturedPostArgs = {
  from?: Array<Stage>
  where: FeaturedPostWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyEditorPicksArgs = {
  from?: Array<Stage>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationUnpublishManyEditorPicksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationUnpublishManyFeaturedPostsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationUnpublishManyFeaturedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishPostArgs = {
  from?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput
  where: AuthorWhereUniqueInput
}

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

export type MutationUpdateEditorPickArgs = {
  data: EditorPickUpdateInput
  where: EditorPickWhereUniqueInput
}

export type MutationUpdateFeaturedPostArgs = {
  data: FeaturedPostUpdateInput
  where: FeaturedPostWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AuthorUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: CategoryUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyEditorPicksArgs = {
  data: EditorPickUpdateManyInput
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationUpdateManyEditorPicksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: EditorPickUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EditorPickManyWhereInput>
}

export type MutationUpdateManyFeaturedPostsArgs = {
  data: FeaturedPostUpdateManyInput
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationUpdateManyFeaturedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: FeaturedPostUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FeaturedPostManyWhereInput>
}

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PostUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdatePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput
  where: AuthorWhereUniqueInput
}

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput
  where: CategoryWhereUniqueInput
}

export type MutationUpsertEditorPickArgs = {
  upsert: EditorPickUpsertInput
  where: EditorPickWhereUniqueInput
}

export type MutationUpsertFeaturedPostArgs = {
  upsert: FeaturedPostUpsertInput
  where: FeaturedPostWhereUniqueInput
}

export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput
  where: PostWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type Post = Node & {
  __typename?: 'Post'
  author?: Maybe<Author>
  blog: RichText
  category?: Maybe<Category>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Post>
  editorPick?: Maybe<EditorPick>
  /** Provide description about blog post for seo */
  excerpt: Scalars['String']
  featuredPost?: Maybe<FeaturedPost>
  /** List of Post versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image: Asset
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PostAuthorArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PostEditorPickArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostFeaturedPostArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PostImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PostUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PostWhereUniqueInput
}

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PostEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PostCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>
  blog: Scalars['RichTextAST']
  category?: InputMaybe<CategoryCreateOneInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  editorPick?: InputMaybe<EditorPickCreateOneInlineInput>
  excerpt: Scalars['String']
  featuredPost?: InputMaybe<FeaturedPostCreateOneInlineInput>
  image: AssetCreateOneInlineInput
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
}

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
}

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Post
}

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  author?: InputMaybe<AuthorWhereInput>
  category?: InputMaybe<CategoryWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  editorPick?: InputMaybe<EditorPickWhereInput>
  excerpt?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  excerpt_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>
  featuredPost?: InputMaybe<FeaturedPostWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>
  blog?: InputMaybe<Scalars['RichTextAST']>
  category?: InputMaybe<CategoryUpdateOneInlineInput>
  editorPick?: InputMaybe<EditorPickUpdateOneInlineInput>
  excerpt?: InputMaybe<Scalars['String']>
  featuredPost?: InputMaybe<FeaturedPostUpdateOneInlineInput>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>
}

export type PostUpdateManyInput = {
  blog?: InputMaybe<Scalars['RichTextAST']>
  excerpt?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput
  /** Document search */
  where: PostWhereInput
}

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>
}

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput
  /** Update document if it exists */
  update: PostUpdateInput
}

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  author?: InputMaybe<AuthorWhereInput>
  category?: InputMaybe<CategoryWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  editorPick?: InputMaybe<EditorPickWhereInput>
  excerpt?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  excerpt_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>
  featuredPost?: InputMaybe<FeaturedPostWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  slug?: InputMaybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single author */
  author?: Maybe<Author>
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple authors */
  authors: Array<Author>
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection
  /** Retrieve multiple categories */
  categories: Array<Category>
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection
  /** Retrieve a single category */
  category?: Maybe<Category>
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>
  /** Retrieve a single editorPick */
  editorPick?: Maybe<EditorPick>
  /** Retrieve document version */
  editorPickVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple editorPicks */
  editorPicks: Array<EditorPick>
  /** Retrieve multiple editorPicks using the Relay connection interface */
  editorPicksConnection: EditorPickConnection
  /** Retrieve a single featuredPost */
  featuredPost?: Maybe<FeaturedPost>
  /** Retrieve document version */
  featuredPostVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple featuredPosts */
  featuredPosts: Array<FeaturedPost>
  /** Retrieve multiple featuredPosts using the Relay connection interface */
  featuredPostsConnection: FeaturedPostConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single post */
  post?: Maybe<Post>
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple posts */
  posts: Array<Post>
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAuthorArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AuthorWhereUniqueInput
}

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput
}

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AuthorWhereInput>
}

export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AuthorWhereInput>
}

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoryArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CategoryWhereUniqueInput
}

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput
}

export type QueryEditorPickArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: EditorPickWhereUniqueInput
}

export type QueryEditorPickVersionArgs = {
  where: VersionWhereInput
}

export type QueryEditorPicksArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EditorPickOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EditorPickWhereInput>
}

export type QueryEditorPicksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EditorPickOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EditorPickWhereInput>
}

export type QueryFeaturedPostArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: FeaturedPostWhereUniqueInput
}

export type QueryFeaturedPostVersionArgs = {
  where: VersionWhereInput
}

export type QueryFeaturedPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<FeaturedPostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<FeaturedPostWhereInput>
}

export type QueryFeaturedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<FeaturedPostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<FeaturedPostWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPostArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PostWhereUniqueInput
}

export type QueryPostVersionArgs = {
  where: VersionWhereInput
}

export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Author
  | Category
  | EditorPick
  | FeaturedPost
  | Post

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type Homepage_QueryQueryVariables = Exact<{ [key: string]: never }>

export type Homepage_QueryQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    id: string
    excerpt: string
    slug: string
    title: string
    image: { __typename?: 'Asset'; url: string }
    category?: { __typename?: 'Category'; name: string } | null
  }>
  featuredPosts: Array<{
    __typename?: 'FeaturedPost'
    posts: Array<{
      __typename?: 'Post'
      id: string
      excerpt: string
      slug: string
      title: string
      category?: { __typename?: 'Category'; name: string } | null
    }>
  }>
  editorPicks: Array<{
    __typename?: 'EditorPick'
    posts: Array<{
      __typename?: 'Post'
      id: string
      excerpt: string
      slug: string
      title: string
      image: { __typename?: 'Asset'; url: string }
      category?: { __typename?: 'Category'; name: string } | null
    }>
  }>
}

export const Homepage_QueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HOMEPAGE_QUERY' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AND' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'NOT' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'editorPick' },
                                      value: { kind: 'ObjectValue', fields: [] },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'NOT' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'featuredPost' },
                                      value: { kind: 'ObjectValue', fields: [] },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'IntValue', value: '3' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'IntValue', value: '3' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editorPicks' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'last' },
                value: { kind: 'IntValue', value: '3' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<Homepage_QueryQuery, Homepage_QueryQueryVariables>
