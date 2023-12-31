import { FrameScript } from 'wow';
import { BehaviorContext } from './Core/Behavior';
import { BehaviorBuilder } from './Core/BehaviorBuilder';
import { me, objMgr } from './Core/ObjectManager';

class Pallas extends FrameScript {
  async initialize() {
    objMgr.update();
    this.behaviorBuilder = new BehaviorBuilder;
    await this.behaviorBuilder.initialize();
    this.rebuild();

    this.updateTimer = setInterval(() => { this.update(); }, 1);
  }

  update() {
    objMgr.update();
    if (objMgr.me) {
      try {
        this.rootBehavior?.process();
      } catch (e) {
        this.rootBehavior = null;
        console.log(e);
      }
    }
  }

  rebuild() {
    objMgr.update();
    if (me) {
      console.log('Rebuilding behaviors');
      this.rootBehavior = this.behaviorBuilder.build(me.specId, BehaviorContext.Normal);
    }
  }

  onEvent(name, ...args) {
    if (name === 'PLAYER_ENTERING_WORLD') {
      this.rebuild();
    }
  }
}

const pallas = new Pallas;
pallas.initialize().then(_ => console.log('Pallas initialized')).catch(e => console.log(`${e}\n${e.stack}`));
