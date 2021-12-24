import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGenerateIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix))
      throw Error('Prefix can not empty'); //fail fast

    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`;
  }

  public numberOfGeneratedUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
