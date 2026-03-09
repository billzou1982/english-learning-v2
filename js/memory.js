// 艾宾浩斯遗忘曲线引擎 (简化版)
// 间隔阶段 (分钟): 5, 30, 720 (12h), 1440 (1d), 2880 (2d), 5760 (4d), 10080 (7d), 21600 (15d)
const INTERVALS = [5, 30, 720, 1440, 2880, 5760, 10080, 21600];

function getMemoryData() {
    return JSON.parse(localStorage.getItem('memoryData') || '{}');
}

function saveMemoryProgress(wordId, success) {
    let data = getMemoryData();
    let record = data[wordId] || { stage: 0, nextReview: 0, lastSuccess: 0 };

    if (success) {
        record.stage = Math.min(record.stage + 1, INTERVALS.length - 1);
    } else {
        record.stage = Math.max(0, record.stage - 1);
    }

    const intervalMin = INTERVALS[record.stage];
    record.nextReview = Date.now() + (intervalMin * 60 * 1000);
    record.lastSuccess = Date.now();
    
    data[wordId] = record;
    localStorage.setItem('memoryData', JSON.stringify(data));
}
