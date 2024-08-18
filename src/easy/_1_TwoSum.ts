function twoSum(nums: number[], target: number): number[] {
    let a = 0
    let b = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                a = i;
                b = j;
                break;
            }
        }
    }
    return [a, b];
};