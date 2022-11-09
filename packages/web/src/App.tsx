import { useEffect, useRef, useState } from "react";
import Blockly from "blockly";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Ja from "blockly/msg/ja";
import "./style.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { FileUpload, Person } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";
import { FaFortAwesome } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { HiOutlineScale } from "react-icons/hi";
import { SlControlPause, SlControlPlay, SlReload } from "react-icons/sl";
import { IconContext } from "react-icons";
import iconURL from "./icon1.svg";
import logoURL from "./logo.da3597da.svg";
import options from "./options";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Blockly.setLocale(Ja);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Blockly.HSV_SATURATION = 0.6;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Blockly.HSV_VALUE = 1;

function Injection() {
  const [code, setCode] = useState("");
  const workspaceDivRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const workspace = Blockly.inject(workspaceDivRef.current, options);
    workspaceRef.current = workspace;
    return () => {
      workspace.dispose();
    };
  }, []);

  return (
    <div>
      <div className="blocklyDiv" ref={workspaceDivRef} />
      <button
        type="button"
        onClick={() => {
          setCode(Blockly.JavaScript.workspaceToCode(workspaceRef.current));
        }}
      >
        出力
      </button>
      {code}
    </div>
  );
}

function ButtonAppBar() {
  return (
    <AppBar position="sticky" sx={{ color: grey[900], bgcolor: grey[50] }}>
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ height: 32 }}>
          <a href="https://utcode.net/" target="_blank" rel="noreferrer">
            <img src={logoURL} alt="" height="100%" />
          </a>
        </Box>
        <Typography sx={{ ml: 2 }}>Code vs Code</Typography>
      </Toolbar>
    </AppBar>
  );
}

function Welcome() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(0);

  const icons = [
    { src: iconURL, name: "icon1" },
    { src: iconURL, name: "icon2" },
    { src: iconURL, name: "icon3" },
    { src: iconURL, name: "icon4" },
    { src: iconURL, name: "icon5" },
    { src: iconURL, name: "icon6" },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeIcon = (
    _: React.MouseEvent<HTMLElement>,
    newIcon: number | null
  ) => {
    if (newIcon !== null) {
      setSelectedIcon(newIcon);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ようこそ</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: grey[600], my: 1 }}>ニックネーム</Typography>
          <TextField
            onChange={handleChangeName}
            autoFocus
            fullWidth
            variant="outlined"
          />
          <Typography sx={{ color: grey[600], my: 1 }}>アイコン</Typography>
          <div>
            <ToggleButtonGroup
              value={selectedIcon}
              onChange={handleChangeIcon}
              exclusive
              size="small"
            >
              {icons.map((icon, index) => (
                <ToggleButton value={index} key={icon.name}>
                  <Avatar src={icon.src} />
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            開始
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Arena() {
  const userName = "ユーティー太郎";
  const userRank = 24;
  const numberOfUsers = 125;

  return (
    <div>
      <Accordion sx={{ position: "absolute", top: 48, right: 480, width: 600 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          闘技場
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: 1,
            }}
          >
            <Card
              sx={{ position: "relative", gridColumn: "1", gridRow: "1 / 5" }}
              variant="outlined"
            >
              <Typography sx={{ position: "absolute", ml: 2, mt: 1.5 }}>
                {userName}
              </Typography>
              <IconContext.Provider value={{ size: "25%" }}>
                <Box sx={{ position: "absolute", ml: 2, mt: 7 }}>
                  <FaFortAwesome />
                </Box>
              </IconContext.Provider>
              <Typography
                sx={{
                  position: "absolute",
                  ml: 11,
                  mt: 3.5,
                  fontSize: 60,
                  fontWeight: "bold",
                  textAlign: "center",
                  width: 4 / 10,
                }}
              >
                {userRank}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  ml: 23,
                  mt: 12,
                  fontSize: 35,
                  color: grey[600],
                  textAlign: "center",
                  width: 1 / 4,
                }}
              >
                {numberOfUsers}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  ml: 13,
                  mt: 13,
                  borderTop: "grey solid",
                  width: 150,
                  transform: "rotate(-25deg)",
                }}
              />
            </Card>
            <Button
              sx={{
                gridColumn: "2",
                gridRow: "1",
                color: grey[900],
                borderColor: grey[300],
              }}
              variant="outlined"
            >
              <FileUpload />
              &nbsp; プログラムのアップロード
            </Button>
            <Button
              sx={{
                gridColumn: "2",
                gridRow: "2",
                color: grey[900],
                borderColor: grey[300],
              }}
              variant="outlined"
            >
              <Person />
              &nbsp; ニックネームの変更…
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

interface EnemyDialogProps {
  open: boolean;
  enemyIds: number[];
  setEnemyIds: (value: number[]) => void;
  handleCloseConfirm: () => void;
  handleCloseCancel: (value: number[]) => void;
}

function EnemyDialog(props: EnemyDialogProps) {
  const { enemyIds, setEnemyIds, open, handleCloseConfirm, handleCloseCancel } =
    props;
  const enemies = [
    { id: 1, name: "ユーザー1" },
    { id: 2, name: "ユーザー2" },
    { id: 3, name: "ユーザー3" },
  ];

  const previousEnemyIds = enemyIds;
  const [selectedEnemy, setSelectedEnemy] = useState({
    id: 1,
    name: "ユーザー1",
  });

  const handleClickCancel = () => {
    handleCloseCancel(previousEnemyIds);
  };

  const handleClickConfirm = () => {
    handleCloseConfirm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enemy = enemies[Number(event.target.value) - 1];
    if (enemy) setSelectedEnemy(enemy);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>対戦相手の選択</DialogTitle>
      <DialogContent>
        <DialogContentText>
          闘技場の対戦相手を3人まで呼び出して対戦できます。
        </DialogContentText>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            mt: 1,
          }}
        >
          <TextField
            select
            value={selectedEnemy.id}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ gridColumn: "1/4" }}
          >
            {enemies.map((enemy) => (
              <MenuItem key={enemy.id} value={enemy.id}>
                {enemy.name}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="outlined"
            sx={{ color: grey[900], borderColor: grey[400] }}
          >
            追加
          </Button>
        </Box>
        <List>
          {enemyIds.map((enemyId) => (
            <ListItem
              sx={{ display: "grid", gridTemplateColumns: "1fr 40px" }}
              key={enemyId}
              dense
              divider
            >
              {enemies[enemyId - 1]?.name}
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 1, gap: 1 }}
        >
          <Button variant="text" onClick={handleClickCancel}>
            キャンセル
          </Button>
          <Button variant="outlined" onClick={handleClickConfirm}>
            OK
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function TestPlay() {
  const playerHp = 20;
  const playerEnergy = 20;
  const speed = 2.5;
  const strength = 1.2;
  const weaponName = "クロスボウ";
  const enemies = [
    { name: "CPU1", hp: 50 },
    { name: "CPU2", hp: 50 },
    { name: "CPU3", hp: 50 },
  ];

  const [open, setOpen] = useState(false);
  const [enemyIds, setEnemyIds] = useState([1, 2, 3]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseConfirm = () => {
    setOpen(false);
  };

  const handleCloseCancel = (value: number[]) => {
    setOpen(false);
    setEnemyIds(value);
  };

  return (
    <div>
      <Accordion sx={{ position: "absolute", top: 48, right: 0, width: 480 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          実行
        </AccordionSummary>
        <AccordionDetails sx={{ height: 600 }}>
          <Box sx={{ border: "solid", height: 0.6 }} />
          <Box sx={{ m: 1 }}>
            <Box>
              <Typography>HP</Typography>
              <LinearProgress variant="determinate" value={playerHp} />
              <Typography sx={{ mt: 1 }}>元気</Typography>
              <LinearProgress variant="determinate" value={playerEnergy} />
            </Box>
            <Box
              sx={{
                mt: 1,
                mb: 2,
                display: "grid",
                gridTemplateColumns: "100px 100px auto 140px",
                gap: 0.5,
              }}
            >
              <Chip
                icon={<DirectionsRunIcon />}
                label={`移動: x${speed}`}
                size="small"
                variant="outlined"
              />
              <IconContext.Provider value={{ size: "0.8em" }}>
                <Chip
                  icon={<GiCrossedSwords />}
                  label={`攻撃: x${strength}`}
                  size="small"
                  variant="outlined"
                />
                <Box />
                <Chip
                  icon={<HiOutlineScale />}
                  label={`装備: ${weaponName}`}
                  size="small"
                  variant="outlined"
                />
              </IconContext.Provider>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
              }}
            >
              {enemies.map((enemy) => (
                <Box key={enemy.name}>
                  <Typography>{enemy.name}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={enemy.hp}
                    color="error"
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="text" size="small" onClick={handleClickOpen}>
                対戦相手の選択...
              </Button>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                sx={{ color: grey[900], borderColor: grey[400] }}
              >
                <SlControlPlay /> &nbsp; 実行
              </Button>
              <Button
                variant="outlined"
                sx={{ color: grey[900], borderColor: grey[400] }}
              >
                <SlControlPause /> &nbsp; 一時停止
              </Button>
              <Button
                variant="outlined"
                sx={{ color: grey[900], borderColor: grey[400] }}
              >
                <SlReload /> &nbsp; リセット
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <EnemyDialog
        enemyIds={enemyIds}
        setEnemyIds={setEnemyIds}
        open={open}
        handleCloseConfirm={handleCloseConfirm}
        handleCloseCancel={handleCloseCancel}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateRows: "48px auto",
        }}
      >
        <ButtonAppBar />
        <Injection />
      </Box>
      <Welcome />
      <Arena />
      <TestPlay />
    </>
  );
}
