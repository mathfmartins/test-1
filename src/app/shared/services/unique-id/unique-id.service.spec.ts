import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
it (`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generated id when with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');
    //expectativa
    expect(id).toContain('app-');
  })
})
