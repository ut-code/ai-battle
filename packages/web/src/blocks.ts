import Blockly from "blockly";

const Number = "Number";
const Array = "Array";
const Vector2D = "ベクトル2";
const Existence = "存在";
const Fighter = "ファイター";
const Portion = "ポーション";
const Weapon = "武器";
const ExistenceOrVector2D = [Existence, Fighter, Portion, Weapon, Vector2D];

// vector2D

export const MATH_VECTOR2 = "math_vector2";
export const X = "X";
export const Y = "Y";
Blockly.Blocks[MATH_VECTOR2] = {
  init(this: Blockly.Block) {
    this.appendValueInput(X).setCheck(Number).appendField("(");
    this.appendValueInput(Y).setCheck(Number).appendField(",");
    this.appendDummyInput().appendField(")");
    this.setOutput(true, Vector2D);
    this.setColour(230);
    this.setTooltip("");
  },
};
Blockly.JavaScript[MATH_VECTOR2] = (block: Blockly.Block) => [
  `[${Blockly.JavaScript.valueToCode(
    block,
    X,
    Blockly.JavaScript.ORDER_COMMA
  )}, ${Blockly.JavaScript.valueToCode(
    block,
    Y,
    Blockly.JavaScript.ORDER_COMMA
  )}]`,
  Blockly.JavaScript.ORDER_MEMBER,
];

// オブジェクト

export const PLAYER = "player";
Blockly.Blocks[PLAYER] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField("自分");
    this.setOutput(true, Fighter);
    this.setColour(20);
    this.setTooltip("");
  },
};
Blockly.JavaScript[PLAYER] = () => [
  `${PLAYER}`,
  Blockly.JavaScript.ORDER_ATOMIC,
];

export const ENEMIES = "enemies";
Blockly.Blocks[ENEMIES] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField("全ての敵");
    this.setOutput(true, Array);
    this.setColour(260);
    this.setTooltip("");
  },
};
Blockly.JavaScript[ENEMIES] = () => [
  `${ENEMIES}`,
  Blockly.JavaScript.ORDER_ATOMIC,
];

export const PORTIONS = "portions";
Blockly.Blocks[PORTIONS] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField("全てのポーション");
    this.setOutput(true, Array);
    this.setColour(260);
    this.setTooltip("");
  },
};
Blockly.JavaScript[PORTIONS] = () => [
  `${PORTIONS}`,
  Blockly.JavaScript.ORDER_ATOMIC,
];

export const WEAPONS = "weapons";
Blockly.Blocks[WEAPONS] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField("全ての武器");
    this.setOutput(true, Array);
    this.setColour(260);
    this.setTooltip("");
  },
};
Blockly.JavaScript[WEAPONS] = () => [
  `${WEAPONS}`,
  Blockly.JavaScript.ORDER_ATOMIC,
];

// プロパティ取得

const OBJECT = "object";
const PROPERTY_NAME = "property_name";

const FighterProperties = {
  HP: "hp",
  ENERGY: "energy",
  AGILITY: "agility",
  STRENGTH: "strength",
  CURRENT_MOVING_SPEED: "currentMovingSpeed",
  WEAPON: "weapon",
  RELOADING_TIME: "reloadingTime",
} as const;
export const GET_PROPERTY_OF_FIGHTER = "get_property_of_fighter";
Blockly.Blocks[GET_PROPERTY_OF_FIGHTER] = {
  init(this: Blockly.Block) {
    this.appendValueInput(OBJECT).setCheck(Fighter).appendField("ファイター:");
    this.appendDummyInput()
      .appendField("の")
      .appendField(
        new Blockly.FieldDropdown([
          ["HP", FighterProperties.HP],
          ["元気", FighterProperties.ENERGY],
          ["素早さ", FighterProperties.AGILITY],
          ["攻撃力", FighterProperties.STRENGTH],
          ["現在の移動速度", FighterProperties.CURRENT_MOVING_SPEED],
          ["所持武器", FighterProperties.WEAPON],
          ["武器リロード残り時間", FighterProperties.RELOADING_TIME],
        ]),
        PROPERTY_NAME
      );
    this.setOutput(true, [Number, Weapon]);
    this.setColour(20);
    this.setTooltip("");
  },
};
Blockly.JavaScript[GET_PROPERTY_OF_FIGHTER] = (block: Blockly.Block) => [
  `${Blockly.JavaScript.valueToCode(
    block,
    OBJECT,
    Blockly.JavaScript.ORDER_MEMBER
  )}.${block.getFieldValue(PROPERTY_NAME)}`,
  Blockly.JavaScript.ORDER_MEMBER,
];

const PortionProperties = {
  KIND: "length",
  AMOUNT: "amount",
} as const;
export const GET_PROPERTY_OF_PORTION = "get_property_of_portion";
Blockly.Blocks[GET_PROPERTY_OF_PORTION] = {
  init(this: Blockly.Block) {
    this.appendValueInput(OBJECT).setCheck(Portion).appendField("ポーション:");
    this.appendDummyInput()
      .appendField("の")
      .appendField(
        new Blockly.FieldDropdown([
          ["種類", PortionProperties.KIND],
          ["効果量", PortionProperties.AMOUNT],
        ]),
        PROPERTY_NAME
      );
    this.setOutput(true, Number);
    this.setColour(20);
    this.setTooltip("");
  },
};
Blockly.JavaScript[GET_PROPERTY_OF_PORTION] = (block: Blockly.Block) => [
  `${Blockly.JavaScript.valueToCode(
    block,
    OBJECT,
    Blockly.JavaScript.ORDER_MEMBER
  )}.${block.getFieldValue(PROPERTY_NAME)}`,
  Blockly.JavaScript.ORDER_MEMBER,
];

const WeaponProperties = {
  RANGE: "range",
  SIZE: "size",
  SPEED: "speed",
  RELOAD_TIME: "reloadTime",
  REQUIRED_ENERGY: "requiredEnergy",
} as const;
export const GET_PROPERTY_OF_WEAPON = "get_property_of_weapon";
Blockly.Blocks[GET_PROPERTY_OF_WEAPON] = {
  init(this: Blockly.Block) {
    this.appendValueInput(OBJECT).setCheck(Weapon).appendField("武器:");
    this.appendDummyInput()
      .appendField("の")
      .appendField(
        new Blockly.FieldDropdown([
          ["射程", WeaponProperties.RANGE],
          ["弾の大きさ", WeaponProperties.SIZE],
          ["弾速", WeaponProperties.SPEED],
          ["リロード時間", WeaponProperties.RELOAD_TIME],
          ["消費元気", WeaponProperties.REQUIRED_ENERGY],
        ]),
        PROPERTY_NAME
      );
    this.setOutput(true, Number);
    this.setColour(20);
    this.setTooltip("");
  },
};
Blockly.JavaScript[GET_PROPERTY_OF_WEAPON] = (block: Blockly.Block) => [
  `${Blockly.JavaScript.valueToCode(
    block,
    OBJECT,
    Blockly.JavaScript.ORDER_MEMBER
  )}.${block.getFieldValue(PROPERTY_NAME)}`,
  Blockly.JavaScript.ORDER_MEMBER,
];

// 意思決定

const TARGET = "target";

export const WALK_TO = "walk_to";
Blockly.Blocks[WALK_TO] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TARGET).setCheck(ExistenceOrVector2D);
    this.appendDummyInput().appendField("へ向かう");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
  },
};
Blockly.JavaScript[WALK_TO] = (block: Blockly.Block) =>
  `${WALK_TO}(${Blockly.JavaScript.valueToCode(
    block,
    TARGET,
    Blockly.JavaScript.ORDER_NONE
  )});`;

export const RUN_TO = "run_to";
Blockly.Blocks[RUN_TO] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TARGET).setCheck(ExistenceOrVector2D);
    this.appendDummyInput().appendField("へ走る");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
  },
};
Blockly.JavaScript[RUN_TO] = (block: Blockly.Block) =>
  `${RUN_TO}(${Blockly.JavaScript.valueToCode(
    block,
    TARGET,
    Blockly.JavaScript.ORDER_NONE
  )});`;

export const ATTACK = "attack";
Blockly.Blocks[ATTACK] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TARGET).setCheck(Fighter);
    this.appendDummyInput().appendField("を殴る");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
  },
};
Blockly.JavaScript[ATTACK] = (block: Blockly.Block) =>
  `${ATTACK}(${Blockly.JavaScript.valueToCode(
    block,
    TARGET,
    Blockly.JavaScript.ORDER_NONE
  )});`;

export const USE_WEAPON = "use_weapon";
Blockly.Blocks[USE_WEAPON] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TARGET).setCheck(ExistenceOrVector2D);
    this.appendDummyInput().appendField("に向けて武器を使う");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
  },
};
Blockly.JavaScript[USE_WEAPON] = (block: Blockly.Block) =>
  `${USE_WEAPON}(${Blockly.JavaScript.valueToCode(
    block,
    TARGET,
    Blockly.JavaScript.ORDER_NONE
  )});`;

export const PICK_UP = "pick_up";
Blockly.Blocks[PICK_UP] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TARGET).setCheck(Weapon);
    this.appendDummyInput().appendField("を拾う");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
  },
};
Blockly.JavaScript[PICK_UP] = (block: Blockly.Block) =>
  `${PICK_UP}(${Blockly.JavaScript.valueToCode(
    block,
    TARGET,
    Blockly.JavaScript.ORDER_NONE
  )});`;

// プリセット関数

export const DISTANCE = "distance";
Blockly.Blocks[DISTANCE] = {
  init(this: Blockly.Block) {
    this.appendValueInput("a").setCheck(ExistenceOrVector2D);
    this.appendValueInput("b").setCheck(ExistenceOrVector2D).appendField("と");
    this.appendDummyInput().appendField("の距離");
    this.setOutput(true, Number);
    this.setColour(230);
    this.setTooltip("");
  },
};