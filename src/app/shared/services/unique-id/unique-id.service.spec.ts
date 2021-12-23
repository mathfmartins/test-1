import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generated id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generated duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});
