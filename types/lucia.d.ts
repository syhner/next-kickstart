/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('~/lib/auth').Auth;
  type DatabaseUserAttributes = import('~/db/schemas/auth').UserAttributes;
  type DatabaseSessionAttributes = {};
}
