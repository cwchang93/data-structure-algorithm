var longestMountain = function(A) {
    let longest = 0,
        start = 0,
        dir = 0

    for (var i = 0; i <= A.length; i++) {
        let val = A[i],
            prev = A[i - 1]
        console.log('va', val, 'prev', prev);

        // compare number first then change the direction
        if (dir === -1 && (i === A.length || !(val < prev))) { // declining / reach end / goes up
            longest = Math.max(i - start, longest) // compare previous one with current longest
            start = i - 1
            dir = val !== undefined && val > prev ? 1 : 0
        } else if (dir === 1 && val < prev) { // decline cross the peak
            dir = -1
        } else if (val === prev) { // flat
            dir = 0
        } else if (val > prev && dir !== 1) { // incline
            start = i - 1
            dir = 1
        }
    }

    return longest
};

// time : O(N)
// space: O(1)

console.log(longestMountain([1, 2, 3, 2, 1, 0]))

const longestMountain = (A) => {
    let longest = 0;
    let slow = 0;
    let fast = 0;

    while (A.length - 1 > fast) {
        slow = fast
        if (A[fast] < A[fast + 1]) {
            while (A[fast] < A[fast + 1]) {
                fast++
            }

            if (A[fast] > A[fast + 1]) {
                while (A[fast] > A[fast + 1]) {
                    fast++
                }
            } else {
                slow = fast
            }
            longest = Math.max(longest, fast - slow + 1);
        } else {
            fast++
        }
    }

    // console.log(longest)
    if (longest >= 3) {
        return longest
    } else {
        return 0;
    }

}