import { api, body, DateTime, endpoint, headers, Int64, Integer, pathParams, request, response, String } from "@airtasker/spot";

@api({ name: "ResourceMod Registry API", version: "1.0.0" })
class Api {}

@endpoint({
  method: "POST",
  path: "/users/register",
  tags: ["Authorization"]
})
class Register {
  @request
  request(
    @body body: RegisterRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: UserWithTokenResponse
  ) {}
  
  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "POST",
  path: "/users/login",
  tags: ["Authorization"]
})
class Login {
  @request
  request(
    @body body: LoginRequest
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: LoginResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "POST",
  path: "/users",
  tags: ["Users"]
})
class CreateUser {
  @request
  request(
    @body body: CreateUserRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: UserWithTokenResponse
  ) {}

  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/users/:name",
  tags: ["Users"]
})
class GetUserByName {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: UserResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/user",
  tags: ["Users"]
})
class GetAuthorizedUser {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: UserWithTokenResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/users",
  tags: ["Users"]
})
class GetUsersList {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: UsersListResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "DELETE",
  path: "/users/:name",
  tags: ["Users"]
})
class DeleteUser {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: DeleteUserResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/content/:type/:name",
  tags: ["Content"]
})
class GetContentByName {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      type: "plugin" | "extension";
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: ContentResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/content/:type",
  tags: ["Content"]
})
class GetContentListByType {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      type: "plugin" | "extension";
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: ContentListResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/content/:type/:name/:version/download",
  tags: ["Content"]
})
class GetContentDownloadURI {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      type: "plugin" | "extension";
      version: String;
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: DownloadURIResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "POST",
  path: "/content",
  tags: ["Content"]
})
class UploadContent {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @body body: UploadContentRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: ContentResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "PUT",
  path: "/content/:type/:name",
  tags: ["Content"]
})
class UpdateContent {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      type: "plugin" | "extension";
      name: String;
    },
    @body body: UpdateContentRequest
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: ContentResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "DELETE",
  path: "/content/:type/:name",
  tags: ["Content"]
})
class DeleteContent {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      type: "plugin" | "extension";
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: DeleteContentResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/setup",
  tags: ["Setup"]
})
class SetupRequired {
  @request
  request(
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: SetupRequiredResponse
  ) {}

}

@endpoint({
  method: "POST",
  path: "/setup/create",
  tags: ["Setup"]
})
class SetupFirstUser {
  @request
  request(
    @body body: RegisterRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: UserWithTokenResponse
  ) {}
  
  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/integrations",
  tags: ["Integrations"]
})
class GetIntegrations {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: IntegrationsResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "GET",
  path: "/integrations/:name/repositories",
  tags: ["Integrations"]
})
class GetRepositories {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: RepositoriesResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "POST",
  path: "/integrations",
  tags: ["Integrations"]
})
class CreateIntegration {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @body body: CreateIntegrationRequest
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: IntegrationResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

@endpoint({
  method: "DELETE",
  path: "/integrations/:name",
  tags: ["Integrations"]
})
class DeleteIntegration {
  @request
  request(
    @headers
    headers: AuthorizationHeader,
    @pathParams
    pathParams: {
      name: String;
    }
  ) {}

  @response({ status: 200 })
  successfulResponse(
    @body body: DeleteIntegrationResponse
  ) {}
  
  @response({status: 401})
  unauthorizedResponse(
    @body body: UnauthorizedResponse
  ){}

  @response({status: 403})
  forbiddenResponse(
    @body body: ForbiddenResponse
  ){}

  @response({status: 422})
  validationErrorResponse(
    @body body: ValidationErrorResponse
  ){}
}

interface CreateUserRequest {
  name: String;
  password: String;
  password_confirmation: String;
  is_owner: boolean;
}

interface UsersListResponse {
  users: UserResponse[]
}

interface DeleteUserResponse {
  message: "Deleted";
}

interface ContentResponse {
  name: String;
  type: "plugin" | "extension";
  description: String;
  is_public: boolean;
  user_name: String;
  repository: Repository;
  created_at: DateTime;
  updated_at: DateTime;
}


interface ContentListResponse {
  content: ContentResponse[];
}

interface DownloadURIResponse {
  link: String;
}

interface UploadContentRequest {
  name: String;
  description: String;
  type: "plugin" | "extension";
  is_public: boolean;
  repository: Repository;
}

interface LoginRequest {
  name: String;
  password: String;
}

interface LoginResponse {
  access_token: String;
}

interface UpdateContentRequest {
  description: String;
  is_public: boolean;
}

interface Repository {
  integration: String;
  full_name: String;
  git_url: String;
}

interface RepositoriesResponse {
  repositories: Repository[];
}

interface IntegrationResponse {
  type: "git";
  name: String;
  host: String;
  access_token: String;
}

interface IntegrationsResponse {
  integrations: IntegrationResponse[];
}

interface CreateIntegrationRequest {
  type: "git";
  name: String;
  host: String;
  access_token: String;
}

interface RegisterRequest {
  name: String;
  password: String;
  password_confirmation: String;
}

interface UserResponse {
  name: String;
  is_owner: boolean;
  created_at: DateTime;
  updated_at: DateTime;
}

interface UserWithTokenResponse {
  name: String;
  is_owner: boolean;
  created_at: DateTime;
  updated_at: DateTime;
  access_token: String;
}

interface DeleteIntegrationResponse {
  message: "Deleted"
}

interface ValidationErrorResponse {
  message: String;
  code: 422;
}

interface UnauthorizedResponse {
  message: String;
  code: 401;
}

interface ForbiddenResponse {
  message: "Feature disabled by registry admin.";
  code: 403;
}

interface DeleteContentResponse {
  message: "Deleted";
}

interface AuthorizationHeader {
  Authorization: String;
}

interface SetupRequiredResponse {
  required: boolean;
}