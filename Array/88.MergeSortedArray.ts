/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (nums1.length ===1 && nums1[0]!==0) return;
    nums1 =nums1.slice().sort((a,b)=>a-b);
    console.log('fst',nums1);
    const firstZeroIdx = nums1.indexOf(0);
    for (let i=0; i< nums2.length;i++) {
        nums1[firstZeroIdx +i] = nums2[i]
    }
    console.log('nums1',nums1);
    nums1 = nums1.slice().sort((a,b)=>a-b);
    console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);
// merge([1],1,[],0);

// merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3)