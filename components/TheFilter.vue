<template>
    <div class="filter">
        <div class="container">
            <h2><span>FILTER NEWS</span></h2>
            <div class="box">
                <div class="tags">
                    <div v-for="obj of tags" :key="obj.id" class="tag">
                        <span>{{ obj.name }}</span>
                        <span class="icon" @click="removeTag(obj.id)">
                            <fa :icon="['fas', 'times']" />
                        </span>
                    </div>
                    <div class="input-box">
                        <input
                            type="text"
                            placeholder="Filter..."
                            name="filterTag"
                            @focus="inputFocus"
                            @blur="inputBlur"
                        />
                    </div>
                </div>
                <button type="button">
                    <span class="icon">
                        <fa :icon="['fas', 'search']" />
                    </span>
                    <span>SEARCH</span>
                </button>
                <div class="options" :class="{ active: showOption }">
                    <ul>
                        <li
                            v-for="(obj, index) of options"
                            :key="obj.id"
                            :class="{ selected: obj.selected }"
                            @click="selectedToggle(index)"
                        >
                            {{ obj.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFilter',
    data() {
        return {
            options: [
                { id: 1, name: 'Sport', selected: false },
                { id: 2, name: 'Travel', selected: false },
                { id: 3, name: 'Lifestyle', selected: false },
            ],
            showOption: false,
        }
    },
    computed: {
        tags() {
            return this.options.filter((obj) => obj.selected)
        },
    },
    methods: {
        inputFocus() {
            this.showOption = true
        },
        inputBlur() {
            setTimeout(() => {
                this.showOption = false
            }, 200)
        },
        selectedToggle(index) {
            const target = this.options[index]
            target.selected = !target.selected
        },
        removeTag(id) {
            this.options.forEach((obj, index) => {
                if (obj.id === id) {
                    this.options[index].selected = false
                }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.filter {
    h2 {
        font-size: 2.2rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 24px;
        &::before,
        &:after {
            content: '';
            display: inline-block;
            flex-basis: 100%;
            max-width: 100px;
            height: 2px;
            background-color: #000;
        }
        &::before {
            margin-right: 12px;
        }
        &::after {
            margin-left: 12px;
        }
        span {
            flex-shrink: 0;
        }
    }
    .box {
        border: 1px solid #ddd;
        display: flex;
        padding: 4px;
        position: relative;
        .tags {
            display: flex;
            flex-basis: 100%;
            @include media(375) {
                flex-wrap: wrap;
            }
        }
        .tag {
            border: 2px solid map-get($color, main);
            display: flex;
            justify-content: center;
            align-items: center;
            color: map-get($color, main);
            padding: 0 8px;
            margin-left: 8px;
            @include media(375) {
                padding: 8px;
                margin-left: 0px;
                margin-bottom: 8px;
            }
            span {
                font-size: 1.4rem;
                font-weight: 700;
            }
            .icon {
                margin-left: 8px;
                &:hover {
                    color: #000;
                }
            }
        }
        .input-box {
            flex-basis: 100%;
            margin-right: 8px;
        }
        input {
            width: 100%;
            height: 100%;
            padding: 12px 4px;
            outline: none;
            font-size: 1.6rem;
            border: 0;
        }
        button {
            border: 0;
            border-radius: 4px;
            background-color: map-get($color, main);
            color: #fff;
            font-weight: 600;
            flex-basis: 140px;
            flex-shrink: 0;
            font-size: 1.4rem;
            cursor: pointer;
            @include media(375) {
                align-self: center;
                padding: 16px 0;
            }
            &:hover {
                background-color: #000;
            }
            .icon {
                margin-right: 4px;
            }
        }
    }
    .options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #f5f5f5;
        display: none;
        &.active {
            display: block;
        }
        ul {
            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;
            padding: 12px 8px;
            font-size: 1.4rem;
            color: #000;
            cursor: pointer;
            &:hover {
                background-color: map-get($color, main);
            }
            &.selected {
                color: #777;
                &:hover {
                    background-color: #fff;
                }
            }
        }
    }
}
</style>
