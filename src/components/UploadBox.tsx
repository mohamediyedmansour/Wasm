import {
  Box,
  Typography,
  Button,
  ButtonBase,
  MenuItem,
  Select,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useRef, useState } from "react";

const VIDEO_EXTENSIONS = ["mp4", "mkv", "webm", "avi", "mov"];
const AUDIO_EXTENSIONS = ["mp3", "wav", "aac", "flac", "ogg"];

type FileCategory = "video" | "audio" | null;

export const UploadBox = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<FileCategory>(null);
  const [targetFormat, setTargetFormat] = useState<string>("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const getExtension = (filename: string) =>
    filename.split(".").pop()?.toLowerCase() || "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const ext = getExtension(selectedFile.name);

    if (VIDEO_EXTENSIONS.includes(ext)) {
      setCategory("video");
    } else if (AUDIO_EXTENSIONS.includes(ext)) {
      setCategory("audio");
    } else {
      alert("Only audio or video files are supported.");
      e.target.value = "";
      setFile(null);
      setCategory(null);
      return;
    }

    setFile(selectedFile);
    setTargetFormat("");
  };

  const getConversionOptions = () => {
    if (category === "video") return ["mp4", "mkv", "webm"];
    if (category === "audio") return ["mp3", "wav", "aac"];
    return [];
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto" }}>
      {/* Upload box */}
      <ButtonBase
        onClick={handleClick}
        sx={{
          width: "100%",
          display: "block",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 220,
            border: "2px dashed #d1d5db",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            color: "#6b7280",
          }}
        >
          <CloudUploadOutlinedIcon sx={{ fontSize: 40 }} />

          <Typography sx={{ fontSize: 16 }}>
            Click to upload or drag and drop
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#9ca3af" }}>
            Any file type supported
          </Typography>
        </Box>
      </ButtonBase>

      <input ref={inputRef} type="file" hidden onChange={handleFileChange} />

      {file && category && (
        <Box sx={{ mt: 3, display: "flex", gap: 2, alignItems: "center" }}>
          <Typography>Convert {category} to:</Typography>

          <Select
            value={targetFormat}
            onChange={(e) => setTargetFormat(e.target.value)}
            displayEmpty
            sx={{ minWidth: 120, color: "black", borderColor: "grey" }}
          >
            <MenuItem value="" disabled>
              Select format
            </MenuItem>

            {getConversionOptions().map((format) => (
              <MenuItem key={format} value={format}>
                {format.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      {/* Convert button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          disabled={!file || !targetFormat}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Convert
        </Button>
      </Box>
    </Box>
  );
};
