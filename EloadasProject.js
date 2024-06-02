class Eloadas {
  constructor(sorok, helyek) {
      if (sorok <= 0 || helyek <= 0) {
          throw new Error('A sorok és helyek száma 0-nál nagyobb kell legyen.');
      }
      this.foglalasok = Array.from({ length: sorok }, () => Array(helyek).fill(false));
  }

  lefoglal() {
      for (let i = 0; i < this.foglalasok.length; i++) {
          for (let j = 0; j < this.foglalasok[i].length; j++) {
              if (!this.foglalasok[i][j]) {
                  this.foglalasok[i][j] = true;
                  return true;
              }
          }
      }
      return false;
  }

  getSzabadHelyek() {
      return this.foglalasok.flat().filter(f => !f).length;
  }

  getTeli() {
      return this.getSzabadHelyek() === 0;
  }

  Foglalt(sor, hely) {
      if (sor < 1 || hely < 1 || sor > this.foglalasok.length || hely > this.foglalasok[0].length) {
          throw new Error('Érvénytelen paraméter.');
      }
      return this.foglalasok[sor - 1][hely - 1];
  }
}

export default Eloadas;
