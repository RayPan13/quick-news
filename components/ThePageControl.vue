<template>
    <div class="control">
        <div class="prev" :class="{ disable: syncShow === 1 }" @click="changeShow(-1)">
            <fa :icon="['fas', 'angle-left']" />
            <span>PREV</span>
        </div>
        <div class="pages">
            <ul>
                <li v-if="pageLength > 3" class="ellipsis">...</li>
                <li
                    v-for="page of pageLength"
                    v-show="pageLength > 3 ? page === 1 || page === syncShow || page === pageLength : true"
                    :key="page"
                    :class="{ active: syncShow === page }"
                    @click="setShow(page)"
                >
                    {{ page }}
                </li>
            </ul>
        </div>
        <div class="next" :class="{ disable: syncShow === pageLength }" @click="changeShow(1)">
            <span>NEXT</span>
            <fa :icon="['fas', 'angle-right']" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'ThePageControl',
    props: {
        show: {
            type: Number,
            required: true,
        },
        pageLength: {
            type: Number,
            required: true,
        },
    },
    computed: {
        syncShow: {
            get() {
                return this.show
            },
            set(val) {
                this.$emit('update:show', val)
            },
        },
    },
    methods: {
        setShow(index) {
            this.syncShow = index
        },
        changeShow(direction) {
            const index = this.syncShow + direction
            if (index > 0 && index <= this.pageLength) {
                this.setShow(index)
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.control {
    border-top: 1px solid #ddd;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 0 0;
    .prev,
    .next {
        font-size: 1.2rem;
        font-weight: 600;
        transition: color 0.5s;
        cursor: pointer;
        &:hover {
            color: map-get($color, main);
        }
        &.disable {
            color: #aaa;
            cursor: auto;
            &:hover {
                color: #aaa;
            }
        }
    }
    .pages {
        border-style: double;
        border-width: 0 0 4px 0;
        border-color: #aaa;
        padding-bottom: 8px;
        flex-basis: 50%;
        text-align: center;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline-flex;
    }
    li {
        padding: 8px;
        margin: 0 4px;
        font-weight: 600;
        border-radius: 4px;
        transition: color 0.5s;
        cursor: pointer;
        &:last-child {
            order: 10;
        }
        &:hover {
            color: map-get($color, main);
        }
        &.active {
            color: #fff;
            background-color: map-get($color, main);
        }
        &.ellipsis {
            order: 9;
            cursor: auto;
            &:hover {
                color: #000;
            }
        }
    }
}
</style>
