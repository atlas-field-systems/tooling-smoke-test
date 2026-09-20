export function hasAccess(subject, resource) {
  return subject?.id != null && subject.id === resource?.ownerId;
}
