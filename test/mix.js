import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Tidal from '../src';

chai.use(chaiAsPromised);

describe('mix', () => {
  let tidal;

  beforeEach(() => {
    tidal = new Tidal();
  });

  describe('getMix', () => {

    it('should return the correct mix object', async () => {
      const mix = await tidal.getMix('// Put a Mix ID Here');

      expect(mix).to.be.an('object')
        .and.to.include({ uuid: '// Put a Mix ID Here' });

    });

  });

  describe('getMixTracks', () => {

    it('should return an array of track objects from the specified mix', async () => {
      const tracks = await tidal.getMixTracks('// Put a Mix ID Here');
      const track = tracks[0];

      expect(tracks).to.be.an('array');

      expect(track).to.be.an('object')
        .and.to.have.property('trackNumber');
    });

  });

});
