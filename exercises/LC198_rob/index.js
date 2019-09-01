// keep in mind regardless that You need to watch for anti adjacent robbing system
// you also want to maximize the loot you rob hence which house you'll rob needs to hinge on this aswell
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    // max loot to rob for a 1 or 2 house scenario
    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])]
    // max loot for 3rd or more future houses to rob
    for (let i = 2; i < nums.length; i++) {
        maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1]));
    }
    return maxLootAtNth.pop();
}

module.exports = rob;
