export const INSTITUTE_CODE_FILTERS=[
    {
        name:'contains',
        keyword:'code__icontains',
        type:'text'
    },
    {
        name:'exact',
        keyword:'code',
        type:'text'
    },
]
export const INSTITUTE_NAME_FILTERS=[
    {
        name:'contains',
        keyword:'name__icontains',
        type:'text'

    },
    {
        name:'exact',
        keyword:'name',
        type:'text'
    }
]
export const INSTITUTE_STATE_FILTERS=[
    {
        name:'choice',
        keyword:'state_choice',
        type:'choice'
    },
    {
        name:'contains',
        keyword:'state__icontains',
        type:'text'
    }
]
export const INSTITUTE_NIRF_FILTERS=[
    {
        name:'less than',
        keyword:'nirf_1__lt',
        type:'number',
    },
    {
        name:'greater than',
        keyword:'nirf_1__gt',
        type:'number'
    }
]
export const INSTITUTE_WEBSITE_FILTERS=[
    {
        name:'contains',
        keyword:'website__icontains',
        type:'text'
    },
    {
        name:'exact',
        keyword:'website',
        type:'text'
    }
]
export const SEAT_MATRIX_INSTITUTE_FILTER=[
    {
        name:'contains',
        keyword:'institute_code__name__icontains',
        type:'text'
    },
    {
        name:'choices',
        keyword:'instute_code__name',
        type:'choice'
    }
]
export const SEAT_MATRIX_BRANCH_FILTER=[
    {
        name:'contains',
        keyword:'branch_code__branch_name__icontains',
        type:'text'
    },
    {
        name:'choice',
        keyword:'branch_code__branch_name'
    }
]
export const SEAT_MATRIX_CATEGORY_FILTER=[
    {
        name:'contains',
        keyword:'category__category__icontains',
        type:'text'
    },
    {
        name:'choice',
        keyword:'category__category',
        type:'choice'
    }
]
export const SEAT_MATRIX_QUOTA_FILTER=[
    {
        name:'contains',
        keyword:'quota__quota__icontains',
        type:'text'
    },
    {
        name:'choice',
        keyword:'quota__quota',
        type:'choice'
    }
]
export const SEAT_MATRIX_SEAT_POOL_FILTER=[
    {
        name:'contains',
        keyword:'seat_pool__seat_pool__icontains',
        type:'text'
    },
    {
        name:'choice',
        keyword:'seat_pool__seat_pool',
        type:'choice'
    }
]
export const SEAT_MATRIX_OPENING_RANK_FILTER=[
    {
        name:'greater than',
        keyword:'opening_rank_gt',
        type:'number'
    },
    {
        name:'less than',
        keyword:'opening_rank_lt',
        type:'number'
    }
]
export const SEAT_MATRIX_CLOSING_RANK_FILTER=[
    {
        name:'greater than',
        keyword:'closing_rank_gt',
        type:'number'
    },
    {
        name:'less than',
        keyword:'closing_rank_lt',
        type:'number'
    }
]