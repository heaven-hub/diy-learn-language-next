import nextIcon from '../svg/next';
import collationIcon from '../svg/collation';
import infoTipsIcon from '../svg/info-tips';
import listeningIcon from '../svg/listening';
import notPassIcon from '../svg/not-pass';
import readingIcon from '../svg/reading';
import writingIcon from '../svg/writing';
import speakingIcon from '../svg/speaking';
import voicePlayer from '../svg/voice-player';
import stopVoice from '../svg/stop-voice';
import xmindIcon from '../svg/xmind';
import addFile from '../svg/add-file';
import addFolder from '../svg/add-folder';
import sendIcon from '../svg/send-icon'
import viewIcon from '../svg/view'
import noViewIcon from '../svg/no-view'
export const iconMap = {
    'not-pass': notPassIcon,
    'info-tips': infoTipsIcon,
    'voice-player':voicePlayer,
    'stop-voice':stopVoice,
    next: nextIcon,
    collation: collationIcon,
    listening: listeningIcon,
    speaking: speakingIcon,
    reading: readingIcon,
    writing: writingIcon,
    xmind:xmindIcon,
    addFile,
    addFolder,
    sendIcon,
    viewIcon,
    noViewIcon
};

export type IconName = keyof typeof iconMap;
