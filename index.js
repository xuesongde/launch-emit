let launchEmit = {
  armsDepot: new Map(),
  fill: function (target, mission) {
    const missionList = this.armsDepot.has(target)
      ? this.armsDepot.get(target)
      : [];
    missionList.push(mission);
    this.armsDepot.set(target, missionList);
  },
  unload: function (target, mission) {
    if (!this.armsDepot.has(target)) {
      console.log(
        "%c you don't have this kind of target",
        "color: #fff; background-color: dodgerblue;"
      );
      return;
    }
    for (let i = 0; i < this.armsDepot.get(target).size; i++) {
      if (this.armsDepot.get(target)[i] == mission) {
        this.armsDepot.get(target).splice(i, 1);
      }
    }
  },
  launch: function (target, data) {
    if (!this.armsDepot.has(target)) {
      console.log(
        "%c you don't have this kind of target",
        "color: #fff; background-color: dodgerblue;"
      );
      return;
    }
    for (let i = 0; i < this.armsDepot.get(target).length; i++) {
      this.armsDepot.get(target)[i](data);
    }
  },
};

export default launchEmit;
